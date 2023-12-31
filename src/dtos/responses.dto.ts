import { ProviderInfoDto } from "./provider-info.dto";
import { IsMongoId } from "class-validator";
import { FieldDto } from "./field.dto";

export class InfoResponseDto {
  info: ProviderInfoDto;
}

export class MetaResponseDto {
  @IsMongoId()
  id: string;

  item_meta?: Record<string, any>;
}

export class TaskResponseDto {
  taskId: String;
}

export class ErrorResponseDto {
  id: string;
  errors?: string[] | string;
}

export class BooleanResponseDto {
  @IsMongoId()
  id: string;

  success?: boolean = true;
}

export class ValidateResponseDto {
  result: boolean;

  message?: string;

  fields?: FieldDto[];
}

export class DynamicAddonResponse {
  field: FieldDto;
}
