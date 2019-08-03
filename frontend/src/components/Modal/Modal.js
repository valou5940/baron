import React from 'react';

import './Modal.css'

const modal = props => (
    <div className="modal_">
        <header className="modal__header_">
            <h1> {props.title}</h1>
        </header>
        <section className="modal__content_">
            {props.children}
        </section>
        <section className="modal__actions_">
            {props.canCancel && <button className="btn_" onClick={props.onCancel}>Cancel</button>}
            {props.canConfirm && <button className="btn_" onClick={props.onConfirm}>{props.confirmText}</button>}

        </section>
    </div>
);

export default modal;