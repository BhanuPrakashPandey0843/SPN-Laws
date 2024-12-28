import React from 'react';
import rocketContactImage from './images/SPN.jpg';

const ContactForm = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#fff',
        marginTop: '7%',
        marginBottom: '5%',
        width: '80%',
        borderRadius: '1rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        padding: '2rem',
        position: 'relative',
    };

    const formControlStyle = {
        borderRadius: '1rem',
        padding: '0.75rem',
        marginBottom: '1rem',
        border: '1px solid #ced4da',
        fontSize: '1rem',
    };

    const contactImageStyle = {
        position: 'absolute',
        top: '-50px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        marginBottom: '1.5rem',
    };

    const keyframes = `
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    `;

    const contactImageImgStyle = {
        borderRadius: '50%',
        width: '80px',
        animation: 'rotate 5s linear infinite',
    };

    const headingStyle = {
        marginBottom: '1.5rem',
        textAlign: 'center',
        color: '#333',
        fontSize: '1.5rem',
        fontWeight: 600,
        width: '100%',
    };

    const formStyle = {
        width: '100%',
        padding: '0 1rem',
        flexGrow: 1,
    };

    const rowStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1rem',
    };

    const colStyle = {
        flex: '1 1 100%',
    };

    const btnContactStyle = {
        width: '100%',
        border: 'none',
        borderRadius: '1rem',
        padding: '1rem',
        background: 'rgb(184, 134, 11)',
        fontWeight: 600,
        color: '#fff',
        cursor: 'pointer',
        fontSize: '1rem',
    };

    const textareaStyle = {
        ...formControlStyle,
        width: '100%',
        height: '200px',
        resize: 'none',
    };

    const gifContainerStyle = {
        display: 'flex',
        justifyContent: 'flex-end',

        flex: 1,
        marginTop: 'auto',
    };

    const gifImageStyle = {
        width: '100%',
        maxWidth: '300px',
        borderRadius: '1rem',
    };

    return (
        <div className="container contact-form" style={containerStyle}>
            <style>{keyframes}</style>
            <h3 style={headingStyle}>Drop Us a Message</h3>
            <div className="contact-image" style={contactImageStyle}>
                <img
                    src={rocketContactImage}
                    alt="rocket_contact"
                    style={contactImageImgStyle}
                />
            </div>
            <form method="post" style={formStyle}>
                <div className="row" style={rowStyle}>
                    <div className="col-md-6" style={colStyle}>
                        <br></br>
                        <div className="form-group">
                            <input
                                type="text"
                                name="txtName"
                                className="form-control"
                                placeholder="Your Name *"
                                style={formControlStyle}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="txtEmail"
                                className="form-control"
                                placeholder="Your Email *"
                                style={formControlStyle}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="txtPhone"
                                className="form-control"
                                placeholder="Your Phone Number *"
                                style={formControlStyle}
                            />
                        </div>
                    </div>
                    <div className="col-md-6" style={colStyle}>
                        <div className="form-group">
                            <textarea
                                name="txtMsg"
                                className="form-control"
                                placeholder="Your Message *"
                                style={textareaStyle}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                name="btnSubmit"
                                className="btnContact"
                                value="Send Message"
                                style={btnContactStyle}
                            />
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default ContactForm;