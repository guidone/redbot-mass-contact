import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Form, FormGroup, ControlLabel } from 'rsuite';

const SendMessageForm = ({
  value: formValue,
  disabled = false,
  onChange = () => {},
  onSubmit = () => {}
}) => {
  return (
    <div>
      <Form fluid formValue={formValue} onChange={onChange}>
        <FormGroup style={{ marginTop: '15px' }}>
          <ControlLabel>Message to send</ControlLabel>
          <FormControl
            name="message"
            disabled={disabled}
            componentClass="textarea"
            style={{ height: '190px', resize: 'none' }}
            onKeyUp={event => {
              if (event.shiftKey && event.keyCode === 13) {
                onSubmit();
              }
            }}
          />
        </FormGroup>
      </Form>
    </div>
  );
};
SendMessageForm.propTypes = {
  value: PropTypes.shape({
    message: PropTypes.string
  }),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default SendMessageForm;
