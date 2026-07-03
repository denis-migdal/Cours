export async function upload(accept=".*") {

    const file_upload = document.createElement('input');
    file_upload.setAttribute('type', 'file');
    file_upload.setAttribute('accept', accept);

    const { promise, resolve } = Promise.withResolvers<null|File>();

    file_upload.addEventListener('cancel', () => {
        resolve(null);
    });
    file_upload.addEventListener('change', () => {
        let value = null;
        if( file_upload.files?.[0] !== undefined )
            value = file_upload.files![0];
        resolve(value);
    });

    file_upload.click();

    return await promise;
}