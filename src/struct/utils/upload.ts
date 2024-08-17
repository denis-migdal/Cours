//TODO: better...
export async function upload() {

    const file_upload = document.createElement('input');
    file_upload.setAttribute('type', 'file');

    const { promise, resolve } = Promise.withResolvers<null|File>();

    file_upload.addEventListener('cancel', () => {
        resolve(null);
    });
    file_upload.addEventListener('change', () => {
        resolve(file_upload.files![0]);
    });

    file_upload.click();

    return await promise;
}