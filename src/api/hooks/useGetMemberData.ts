import useSWR from 'swr';
import Api from '../index';

async function getMemberNickname() {
  const res = await Api.getMemberNickname();
  return res.data;
}

export function useGetMemberNickname() {
  const { data, error } = useSWR(
    [`/api/member/onBoarding/nickname`],
    getMemberNickname,
    { suspense: true },
  );
  return {
    data: data && data.data,
    error,
    loading: !error && !data,
  };
}
