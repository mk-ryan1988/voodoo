class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor(data) {
        this.errors = {}
    }

    /**
     * Fetch all relevant data for the form.
     */
    data() {
        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property];
        }

        return data;
    }

    /**
     * Reset the form fields.
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }
    }

    /**
     * Send a POST request to the given URL.
     * .
     * @param {string} url
     */
    post(url) {
        return this.submit('post', url);
    }


    /**
     * Send a PUT request to the given URL.
     * .
     * @param {string} url
     */
    put(url) {
        return this.submit('put', url);
    }


    /**
     * Send a PATCH request to the given URL.
     * .
     * @param {string} url
     */
    patch(url) {
        return this.submit('patch', url);
    }

    /**
     * Send a DELETE request to the given URL.
     * .
     * @param {string} url
     */
    delete(url) {
        return this.submit('delete', url);
    }

    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType, url) {
        // return new Promise((resolve, reject) => {
        //     axios[requestType](url, this.data())
        //         .then(response => {
        //             this.onSuccess(response.data);

        //             resolve(response.data);
        //         })
        //         .catch(error => {
        //             this.onFail(error.response.data);

        //             reject(error.response.data);
        //         });
        // });
        this.onSuccess('successful');
    }

    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
    onSuccess(data) {
        alert(data); // temporary

        // this.reset();
    }

    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     */
    onFail(errors) {
        // this.errors.record(errors);
    }

    /**
     * Determine if an errors exists for the given field.
     *
     * @param {string} field
     */
    hasError(field) {
        return this.errors.hasOwnProperty(field);
    }

    /**
     * Determine if we have any errors.
     */
    hasErrors() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     * Retrieve the error message for a field.
     *
     * @param {string} field
     */
    getError(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    /**
     * Record the new errors.
     *
     * @param {object} errors
     */
    recordErrors(errors) {
        this.errors = errors;
        console.log('logging');
    }

    /**
     * Clear one or all error fields.
     *
     * @param {string|null} field
     */
    clearErrors(field) {
        console.log('logging');
        if (field) {
            delete this.errors[field];

            return;
        }

        this.errors = {};
    }
}

export {
    Form,
}