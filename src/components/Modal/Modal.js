import React, { Component } from 'react';
import style from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('modal mount');
  }

  componentWillUnmount() {
    console.log('modal unmount');
  }

  render() {
    return createPortal(
      <div className={style.overlay}>
        <div className={style.modal}>
          <img src={this.props.children} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}
