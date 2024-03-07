import { BlobServiceClient } from "@azure/storage-blob";

export async function uploadImage(containerName, base64Image, fileName) {
  const blobServiceClient = new BlobServiceClient(
    "https://robolens.blob.core.windows.net/user-photos?sp=racwl&st=2023-12-07T07:57:01Z&se=2025-01-01T15:57:01Z&spr=https&sv=2022-11-02&sr=c&sig=dy7rFtdTWJ0rg30ZhwowQC598jWwxxwNvBt5y1%2BjSa8%3D"
  );
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobClient = containerClient.getBlobClient(fileName);
  const blockBlobClient = blobClient.getBlockBlobClient(fileName);

  // Convert base64 to ArrayBuffer
  const binaryString = window.atob(base64Image.split(",")[1]);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const result = await blockBlobClient.uploadData(bytes, {
    blockSize: 4 * 1024 * 1024,
    concurrency: 20,
    onProgress: (ev) => console.log(ev),
  });

  console.log(`Upload of file '${fileName}' completed`);
  return result._response.request.url;
}
