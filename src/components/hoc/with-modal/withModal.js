import React, { Fragment, Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@/components/button';
import './_with-modal.scss';

export default function withModal(WrappedComponent) {
  return class WithModal extends Component {
    constructor() {
      super();
      // refs
      this.mainElement = null;
      this.headingElement = null;

      // state
      this.state = {
        isModalOpened: false,
        isHidden: false,
      };
    }

    static propTypes = {
      modalHeading: PropTypes.string.isRequired,
      toggleButton: PropTypes.object.isRequired,
      acceptText: PropTypes.string,
      declineText: PropTypes.string,
      contentElement: PropTypes.element,
      className: PropTypes.string,
      acceptCallback: PropTypes.func,
    }

    static defaultProps = {
      acceptText: 'Accept',
      declineText: 'Decline',
      contentElement: null,
      className: '',
      acceptCallback: () => {},
    }

    toggleModal = () => {
      this.setState(prev => ({ isModalOpened: !prev.isModalOpened }));
    }

    render() {
      const { isModalOpened, isHidden } = this.state;
      const {
        modalHeading, acceptText, declineText, className, toggleButton, acceptCallback,
      } = this.props;

      return (
        isHidden ? null : (
          <Fragment>
            <ReactModal
              className="modal"
              isOpen={isModalOpened}
              contentLabel="Approve Dialog"
              appElement={this.mainElement}
              closeTimeoutMS={300}
              role="dialog"
              onRequestClose={this.toggleModal}>
              <h3 className="modal__heading">{modalHeading}</h3>


              {this.headingElement && (
                <h5 className="modal__sub-heading">{this.headingElement.innerText}</h5>
              )}

              <div className="modal__content">{this.contentElement && this.contentElement}</div>

              <div className="modal__actions actions">
                <Button
                  className="button_main button_main button_safe"
                  text={declineText}
                  callback={this.toggleModal}
                />

                <Button
                  className="button_main button_main button_warning"
                  text={acceptText}
                  callback={acceptCallback.bind(this)}
                />
              </div>
            </ReactModal>
            <WrappedComponent
              {...this.props}
              mainRef={(el) => { this.mainElement = el; }}
              headingRef={(el) => { this.headingElement = el; }}
              contentRef={(el) => { this.contentElement = el; }}
              className={classNames([className, 'with-modal'])}
              extraButton={
                <Button
                  className={toggleButton.className}
                  text={toggleButton.text}
                  icon={toggleButton.icon}
                  callback={this.toggleModal}
                />
              }

            />
          </Fragment>
        )
      );
    }
  };
}
