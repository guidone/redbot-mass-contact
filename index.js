import _ from 'lodash';
import React, { useState, useCallback } from 'react';
import { Button, ButtonToolbar, FormGroup, Progress, Message } from 'rsuite';
import { plug } from 'code-plug';

import { Panel } from '../../src/components';
import { WidgetForm as Widgets, useMCContext, confirm } from '../../src/components';

import { useNodeRedSocket } from '../../src/hooks/socket';

import './widget-send.scss';
import SendForm from './views/send-form';

const { WidgetForm, Content, Footer } = Widgets;
const { Line } = Progress;

const SendMessageToAllWidget = () => {
  const { state } = useMCContext();
  const { chatbotId, activeChatbots } = state;

  // get the default transport for the bot
  const defaultChatbot = activeChatbots.filter(chatbot => chatbot.chatbotId === chatbotId)[0];

  const [formValue, setFormValue] = useState({
    message: '',
    botNode: defaultChatbot?.botNode,
    transport: defaultChatbot?.transport
  });
  const [total, setTotal] = useState(null);
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
        }
      } else if (channel === 'redbot' && payload.topic === 'red-bot.sendAll.error') {
        setError(payload.payload);
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
      sendMessage('red-bot.sendAll', { ...formValue, chatbotId, activeChatbots });
      setError(null);
      //setFormValue({ ...formValue, message: '' });
    }
  }, [formValue])

  return (
    <Panel title="Mass Contact" className="widget-send-message">
      <WidgetForm fluid formValue={formValue} onChange={formValue => setFormValue(formValue)}>
        <Content>
          <div>
            Send the text message to all users of the chatbot <b>chatbotId</b>. If a user has multiple platforms the default one
            will be used or the first available one.
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
          {(isSending || isComplete) && (
            <Line percent={Math.ceil((current / total) * 100)} status='active' />
          )}
          {isComplete && (
            <div style={{ padding: '0px 4px 0px 4px' }}>
               <Message showIcon type="success" description={`Send out complete! ${total} recipients.`} />
            </div>
          )}
          {error && (
            <div style={{ padding: '4px' }}>
               <Message showIcon type="error" description={error} />
            </div>
          )}
        </Content>
        <Footer>
          <FormGroup>
            <ButtonToolbar>
              <Button appearance="primary" disabled={!canSend} onClick={cbSend}>
                Send Message
              </Button>
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

plug('widgets', SendMessageToAllWidget, { x: 0, y: 0, w: 2, h: 7, isResizable: false, id: 'redbot-mass-contact', permission: 'mass-send' });
