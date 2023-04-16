export interface IResponse<TResponse> {
  ok: boolean;
  data: TResponse;
}

export const response = <TResponse>({ ok, data }: IResponse<TResponse>) => {
  return {
    ok,
    data,
  };
};
