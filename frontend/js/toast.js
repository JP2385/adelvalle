// Toast notification system
(function() {
    // Create container if it doesn't exist
    function getToastContainer() {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        return container;
    }

    // Show toast notification
    window.showToast = function(message, type = 'info', duration = 4000) {
        const container = getToastContainer();
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };
        
        toast.innerHTML = `
            <span class="toast-icon">${icons[type] || icons.info}</span>
            <span class="toast-message">${message}</span>
            <button class="toast-close" onclick="this.parentElement.remove()">×</button>
        `;
        
        container.appendChild(toast);
        
        // Auto remove after duration
        if (duration > 0) {
            setTimeout(() => {
                toast.classList.add('fade-out');
                setTimeout(() => toast.remove(), 300);
            }, duration);
        }
        
        return toast;
    };

    // Convenience methods
    window.showSuccess = function(message, duration) {
        return showToast(message, 'success', duration);
    };

    window.showError = function(message, duration) {
        return showToast(message, 'error', duration);
    };

    window.showWarning = function(message, duration) {
        return showToast(message, 'warning', duration);
    };

    window.showInfo = function(message, duration) {
        return showToast(message, 'info', duration);
    };
})();
