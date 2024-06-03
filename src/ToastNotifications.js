import React, { useState, useEffect } from 'react';

const ToastNotification = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = () => {
    const id = Date.now();
    const newToast = { id, message: 'This is a toast notification!', show: false };
    setToasts((prevToasts) => [...prevToasts, newToast]);

    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.map((toast) =>
          toast.id === id ? { ...toast, show: true } : toast
        )
      );
    }, 10); // Small timeout to ensure the display change is registered

    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.map((toast) =>
          toast.id === id ? { ...toast, show: false } : toast
        )
      );
      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
      }, 500); // Match the duration of the CSS transition
    }, 3000); // Duration before the toast hides
  };

  return (
    <div style={styles.body}>
      <button className="button purple-bg" style={styles.toastButton} onClick={showToast}>
        Show Toast
      </button>
      <div style={styles.toastContainer}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            style={{
              ...styles.toast,
              ...(toast.show ? styles.show : {}),
            }}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  body: {
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    backgroundColor: '#f5f5f7',
    color: '#333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vh',
    flexDirection: 'column',
  },
  toastContainer: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    zIndex: 1000,
  },
  toast: {
    backgroundColor: '#333',
    color: 'white',
    padding: '15px 20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    opacity: 0,
    transform: 'translateY(100px)',
    transition: 'transform 0.5s ease, opacity 0.5s ease',
  },
  show: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  toastButton: {
    padding: '12px 24px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  toastButtonHover: {
    backgroundColor: '#005bb5',
    transform: 'translateY(-2px)',
  },
};

export default ToastNotification;
