import React, {Component} from 'react'

import {Button, Modal, Form, Input, Radio} from 'antd';

const FormItem = Form.Item;

const CustomModal = (props) => {
  const {visible, onCancel, onCreate, form} = props;
  const {getFieldDecorator} = form;

  return (
    <Modal
      visible={visible}
      title="Add New Recipe"
      okText="Add"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical">
        <FormItem label="Title">
          {getFieldDecorator('title', {
            rules: [{required: true, message: 'Please input the title of recipe'}],
          })(<Input className='modal-text-input' type="text" />)}
        </FormItem>

        <FormItem label="Description">
          {getFieldDecorator('description')(<Input className='modal-textarea-input' tyoe="textarea" />)}
        </FormItem>
      </Form>
    </Modal>
  );
}

const CollectionCreateForm = Form.create()(CustomModal);

class NewRecipe extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  showModal = () => {
    this.setState({visible: true});
  }

  handleCancel = () => {
    this.setState({visible: false});
  }

  handleCreate = () => {
    const form = this.form;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);

      form.resetFields();
      this.setState({visible: false});
    });
  }

  saveFormRef = (form) => {
    this.form = form;
  }

  render() {
    return (
      <div>
        <h4>Adding new Recipe</h4>
        <Button  type="primary" onClick={this.showModal}>
          Add New Recipe
        </Button>
        <CollectionCreateForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default NewRecipe;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { LocaleProvider, DatePicker, message } from 'antd';
// // The default locale is en-US, but we can change it to other language
// import frFR from 'antd/lib/locale-provider/fr_FR';
// import moment from 'moment';
// import 'moment/locale/fr';
// moment.locale('fr');

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: '',
//     };
//   }
//   handleChange(date) {
//     message.info('Selected Date: ' + date.toString());
//     this.setState({ date });
//   }
//   render() {
//     return (
//       <LocaleProvider locale={frFR}>
//         <div style={{ width: 400, margin: '100px auto' }}>
//           <DatePicker onChange={value => this.handleChange(value)} />
//           <div style={{ marginTop: 20 }}>Date: {this.state.date.toString()}</div>
//         </div>
//       </LocaleProvider>
//     );
//   }
// }

