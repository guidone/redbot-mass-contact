import _ from 'lodash';
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, FormGroup, Notification, SelectPicker } from 'rsuite';
import { Link } from 'react-router-dom';
import { plug } from 'code-plug';

import { Panel } from '../../src/components';
import { WidgetForm as Widgets, useMCContext, confirm } from '../../src/components';

import { useNodeRedSocket } from '../../src/hooks/socket';

import './widget-send.scss';
import SendForm from './views/send-form';

const { WidgetForm, Content, Footer } = Widgets;

const TPS_OPTIONS = [
  // for testing, hide
  //{ value: 0.1, label: '0.1 msg/s' },
  { value: 1, label: '1 msg/s' },
  { value: 5, label: '5 msg/s' },
  { value: 10, label: '10 msg/s' },
  { value: 20, label: '20 msg/s' },
  { value: 30, label: '30 msg/s' }
];

const MiniStatusBar = ({ perc = 0 }) => {
  return (
    <div className="mini-status-bar">
      <div className="bar">
        <div style={{ width: `${Math.floor(perc/2)}px`}} className="inner" />
      </div>
      <span>{perc}%</span>
    </div>
  );
};
MiniStatusBar.propTypes = {
  perc: PropTypes.number
};


const SendMessageToAllWidget = () => {
  const { state } = useMCContext();
  const { chatbotId, activeChatbots } = state;
  const [formValue, setFormValue] = useState({
    message: ''
  });
  const [total, setTotal] = useState(null);
  const [tps, setTps] = useState(1);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(0);

  const canSend = !_.isEmpty(formValue.message);
  const isSending = total != null && total !== current;
  const isComplete = total != null && total === current;

  const { sendMessage } = useNodeRedSocket({
    onMessage: async (channel, payload) => {

      if (channel === 'redbot' && payload.topic === 'red-bot.sendAll.status') {
        setTotal(payload.payload.total);
        setCurrent(payload.payload.current);
        // if 100% then clean
        if (payload.payload.total === payload.payload.current) {
          setFormValue({ ...formValue, message: '' });
          Notification.success({
            placement: 'topStart',
            title: 'Mass Contact',
            description: `Send out complete! ${payload.payload.total} recipients.`
          });
        }
      } else if (channel === 'redbot' && payload.topic === 'red-bot.sendAll.error') {
        //setError(payload.payload);
        Notification.error({
          placement: 'topStart',
          title: 'Mass Contact Error',
          description: payload.payload
        });
      }

    }
  });

  const cbClear = useCallback(() => {
    setTotal(null);
    setError(null);
    setCurrent(0);
    setFormValue({ message: '' });
  }, []);
  const cbSend = useCallback(async() => {
    if (await confirm(
      <div>Send the message to all users?</div>,
      { okLabel: 'Yes, send' }
    )) {
      sendMessage('red-bot.sendAll', {
        ...formValue,
        chatbotId,
        activeChatbots,
        tps
      });
      setError(null);
      //setFormValue({ ...formValue, message: '' });
    }
  }, [formValue])

  return (
    <Panel title="Mass Contact" className="widget-send-message"
      menu={(isSending || isComplete) && <MiniStatusBar perc={Math.ceil((current / total) * 100)} />}
    >
      <WidgetForm fluid formValue={formValue} onChange={formValue => setFormValue(formValue)}>
        <Content>
          <div>
            Send the text message to all users of the chatbot <b>chatbotId</b>. If a user has multiple platforms the default one
            will be used or the first available one.
            Check <Link to="/queues?queue=tasks-recipients">recipients queue</Link>.
          </div>
          <SendForm
            value={formValue}
            disabled={isSending}
            onChange={value => {
              setFormValue(value);
              setTotal(null);
              setTotal(error);
              setCurrent(0);
            }}
            onSubmit={() => {
              setTotal(null);
              setError(null);
              sendMessage('red-bot.sendAll', { ...formValue, activeChatbots, chatbotId });
            }}
          />
        </Content>
        <Footer>
          <FormGroup>
            <ButtonToolbar>
              <Button appearance="primary" disabled={!canSend || isSending} onClick={cbSend}>
                Send Message
              </Button>
              <SelectPicker
                placeholder="Status"
                data={TPS_OPTIONS}
                value={tps}
                searchable={false}
                onChange={tps => {
                  setTps(tps);
                  sendMessage('red-bot.sendAll.setTPS', { tps });
                }}
              />
              <div className="key-hint">
                Shift + Enter to Send
              </div>
              <Button
                style={{ float: 'right' }}
                appearance="default"
                onClick={cbClear}>
                Clear
              </Button>
            </ButtonToolbar>
          </FormGroup>
        </Footer>
      </WidgetForm>
    </Panel>
  );
}

plug(
  'permissions',
  null,
  {
    permission: 'mass-send',
    name: 'Mass Send',
    description: 'Send message to all chatbot\'s user',
    group: 'General'
  }
);

plug('widgets', SendMessageToAllWidget, { x: 0, y: 0, w: 2, h: 6, isResizable: false, id: 'redbot-mass-contact', permission: 'mass-send' });
