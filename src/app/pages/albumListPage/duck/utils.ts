export const getAlbumTableData = (data: any) => {
  if (!data) {
    return [];
  }
  return data?.albums?.data.map((item: any) => ({
    key: item?.key,
    id: item?.id,
    title: item?.title,
    userName: item?.user?.name,
    totalCount: item?.photos?.data?.length,
  }));
};
