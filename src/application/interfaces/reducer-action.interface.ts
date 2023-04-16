export interface IReducerAction<TType, TPayload> {
  type: TType;
  payload: TPayload;
}
