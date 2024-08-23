export default async function createFileList(urls) {
  const files = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      const data = await response.blob();
      const metadata = { type: data.type || "image/jpeg" };
      const fileName = url.split("/").pop();
      return new File([data], fileName, metadata);
    })
  );

  // Tạo FileList từ mảng các File
  const dataTransfer = new DataTransfer();
  files.forEach((file) => dataTransfer.items.add(file));

  return dataTransfer.files;
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("vi-VN").format(date);
}
