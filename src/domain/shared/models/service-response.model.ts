export interface IServiceResponse<TResponse> {
  ok: boolean;
  data: TResponse;
}

export const ServiceResponse = <TResponse>({
  ok,
  data,
}: IServiceResponse<TResponse>) => {
  return {
    ok,
    data,
  };
};
