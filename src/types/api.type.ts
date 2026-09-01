export type ApiSuccess<T> = {
  success: true;
  data: T;
};

export type ApiFail = {
  success: false;
  data: {
    error: string;
    status: number;
    message: string;
  };
};

export type ApiResponse<T> = Promise<ApiSuccess<T> | ApiFail>;
