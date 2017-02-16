import React from 'react'
import { Modal } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

const Tips = (props) => (
    <Modal show={props.modal.get("show")} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <form onSubmit={props.handleSubmit}>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-lg">Tips</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <ul className="list-group">
                    {props.modal.get("body").map((data, i) => (
                        <li className="list-group-item" key={i}>
                            {props.modal.get("type") === 0 ?
                                <div>
                                    <Field name="definition" id={"definition_"+i} component="input" type="radio" value={data.text}/>
                                    <label htmlFor={"definition_"+i}>{data.text}</label>
                                </div>
                                    :
                                <div>
                                    <Field name={"examples_"+i} id={"examples_"+i} component="input" type="checkbox" value={data.text}/>
                                    <label htmlFor={"examples_"+i}>{data.text}</label>
                                </div>
                            }
                        </li>
                    ))}
                </ul>
            </Modal.Body>

            <Modal.Footer>
                <button type="button" onClick={props.onHide} className="btn btn-default">Close</button>
                <button className="btn btn-success">Choose</button>
            </Modal.Footer>
        </form>
    </Modal>
)

const TipsForm = reduxForm({
    form: 'tips'
})(Tips);

export default TipsForm