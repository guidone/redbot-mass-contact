import React, { useState } from 'react';
import { Button, ButtonToolbar, FormGroup } from 'rsuite';
import { plug } from 'code-plug';

import { Panel } from '../../src/components';
import { WidgetForm as Widgets } from '../../src/components';
import { useNodeRedSocket } from '../../src/hooks/socket';

import SendMessageButton from './views/send-message-button';
import './widget-send.scss';
import SendForm from './views/send-form';

const { WidgetForm, Content, Footer } = Widgets;


const SendMessageWidget = ({ stats }) => {
  const [formValue, setFormValue] = useState({ message: '' });
  const canSend = !_.isEmpty(formValue.chatId) && !_.isEmpty(formValue.botNode);
  const { sendMessage } = useNodeRedSocket();

  return (
    <Panel title="Send Message" className="widget-send-message">
      <WidgetForm fluid formValue={formValue} onChange={formValue => setFormValue(formValue)}>
        <Content>
          <SendForm
            value={formValue}
            onChange={value => setFormValue(value)}
            onSubmit={() => {
              sendMessage('message.send', formValue);
              setFormValue({ ...formValue, message: '' });
            }}
          />
        </Content>
        <Footer>
          <FormGroup>
            <ButtonToolbar>
              <Button appearance="primary" disabled={!canSend} onClick={() => {
                sendMessage('message.send', formValue);
                setFormValue({ ...formValue, message: '' });
              }}>
                Send Message
              </Button>
              <div className="key-hint">
                Shift + Enter to Send
              </div>
              <Button
                style={{ float: 'right' }}
                appearance="default" onClick={() => setFormValue({ botNode: null, recipient: null, chatId: null, message: '' })}>
                Cancel
              </Button>
            </ButtonToolbar>
          </FormGroup>
        </Footer>
      </WidgetForm>
    </Panel>
  );
}

plug('widgets', SendMessageWidget, { x: 0, y: 0, w: 2, h: 6, isResizable: false, id: 1 });

// register button in the user modal to redirect to survey lists
plug(
  'user-button',
  SendMessageButton
);
plug(
  'user-record-buttons',
  ({ record }) => <SendMessageButton transport={record.transport} appearance="primary" user={record.user}/>,
  {
    type: 'survey'
  }
);
