import { showNotification } from "./src/js/notificationSystem.js";

// Existing notification examples
// showNotification('lorem ipsum!', 'info', 3000);
// showNotification('lorem ipsum!', 'success', 5000);
// showNotification('lorem ipsum!', 'warning', 7000);
// showNotification('lorem ipsum!', 'error', 10000);

// New functionality for supported services and file upload
document.addEventListener('DOMContentLoaded', function () {
  /* --- Supported Services Dropdown --- */
  const container = document.querySelector('.services-container');
  const title = container.querySelector('.services-container__title');
  const toggle = container.querySelector('.services-container__toggle');

  function toggleDropdown() {
    container.classList.toggle('services-container--open');
  }
  
  title.addEventListener('click', toggleDropdown);
  toggle.addEventListener('click', toggleDropdown);

  /* --- File Upload Button and Drag-Drop --- */
  const uploadButton = document.getElementById('uploadButton');
  const fileInput = document.getElementById('fileInput');
  const uploadStatus = document.querySelector('.upload-section__status');
  const uploadButtonIcon = uploadButton.querySelector('.upload-section__icon');
  const uploadButtonText = uploadButton.querySelector('.upload-section__text');

  // Helper: Reset upload button to default state
  function resetUploadButton() {
    uploadButton.classList.remove('dragover');
    uploadButtonText.textContent = 'click or drag and drop a video';
    uploadButtonIcon.className = 'upload-section__icon fas fa-file-upload';
  }

  // Click to open file explorer
  uploadButton.addEventListener('click', () => {
    fileInput.click();
  });

  // File input change: show "Pasted!" when a file is selected
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length) {
      uploadStatus.classList.remove('hidden');
      uploadStatus.textContent = 'pasted!';
      resetUploadButton();
    }
  });

  // Drag events to update button appearance
  uploadButton.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadButton.classList.add('dragover');
    uploadButtonText.textContent = 'paste!';
    uploadButtonIcon.className = 'upload-section__icon fas fa-clipboard';
  });

  uploadButton.addEventListener('dragleave', (e) => {
    e.preventDefault();
    resetUploadButton();
  });

  uploadButton.addEventListener('drop', (e) => {
    e.preventDefault();
    resetUploadButton();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length) {
      // Note: Direct assignment to fileInput.files is read-only.
      // For simulation purposes, we trigger the status change.
      uploadStatus.classList.remove('hidden');
      uploadStatus.textContent = 'pasted!';
    }
  });
});