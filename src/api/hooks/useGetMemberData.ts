import useSWR from 'swr';
import Api from '../index';

async function getMemberList() {
  const res = await Api.getMembers();
  return res.data;
}

export function useGetMemberList() {
  const { data, error } = useSWR([`/documents`], getMemberList);
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
