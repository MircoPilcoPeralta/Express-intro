type message = "OK" | "CREATED" | "CONFLICT";
type status = 200 | 201 | 409;

export interface ApiResponse {
  data: string;
  message: message;
  status: status;
}
