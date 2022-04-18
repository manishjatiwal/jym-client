import Swal from 'sweetalert2';

type params = {
  type: 'success' | 'error' | 'info';
  message: string;
  title?: string;
  allowOutsideClick?: boolean;
  confirmButtonText?: string;
  onConfirm?: () => void;
};

function fireAlert({ message, type, title, allowOutsideClick = true, confirmButtonText, onConfirm }: params) {
  Swal.fire({
    text: message,
    icon: type,
    title: title,
    allowOutsideClick: allowOutsideClick,
    backdrop: allowOutsideClick,
    confirmButtonText: confirmButtonText || 'Ok! got it!',
    heightAuto: false,
    customClass: {
      confirmButton: 'btn btn-primary',
      popup: 'swal2-popup-container'
    }
  }).then(() => {
    if (onConfirm) onConfirm();
  });
}

export default fireAlert;
