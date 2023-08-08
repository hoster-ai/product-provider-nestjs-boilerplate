import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsOptional,
  IsMongoId,
  IsDefined,
  IsEnum,
  IsIP,
  IsNumber,
} from "class-validator";
import { DurationEnum } from "../enums/duration.enum";
import { IpTypeEnum } from "../enums/ip-type.enum";

class IpDto {
  @IsIP()
  @IsDefined()
  @ApiProperty({
    type: String,
    example: "1.1.1.1",
    title: "Ip Address"
  })
  address: string;

  @IsNumber()
  @IsDefined()
  @ApiProperty({
    // type: Number,
    type: String,
    example: "/24",
    title: "IP range",
  })
  range: number;

  @IsEnum(IpTypeEnum)
  @IsDefined()
  @ApiProperty({
    enum: IpTypeEnum,
    example: IpTypeEnum.IPv4,
    title: "Ip Protocol Type"
  })
  type: IpTypeEnum;
}

export class ProductDataDto {
  @IsOptional()
  @IsMongoId()
  @ApiProperty({
    type: String,
    example: "5ce45d7606444f199acfba1e",
    title: 'Id of the product/service owned by the user',
    description: 'Id of the product/service owned by the user'
  })
  id: string;

  @IsDefined()
  @ApiProperty({
    type: Object,
    additionalProperties: true,
    title: "Product Attributes",
    example: {
      max_listeners: 15,
      hdd: '1G',
    },
    description: 'These are all the attributes of the General Product as assigned by the Seller.'
  })
  product_attributes: Record<string, any>;

  @IsDefined()
  @ApiProperty({
    type: Object,
    additionalProperties: true,
    title: "Item addons",
    example: { station_name: "MyStation FM" },
    description: 'These are all the attributes assigned to the Item by the Customer during purchase.'
  })
  item_addons: Record<string, any>;

  @IsDefined()
  @ApiProperty({
    type: Object,
    additionalProperties: true,
    title: "Item meta",
    example: { station_id: "example_id", },
    description: 'These are all the attributes of the purchased item generated by the integration'
  })
  item_meta?: Record<string, any>;


  @IsDefined()
  @IsEnum(DurationEnum)
  @ApiProperty({
    enum: DurationEnum,
    title: "Duration in months",
    example: DurationEnum.ONE_YEAR,
    description: 'This is the duration of the subscription the user has to the product in months.'
  })
  duration: DurationEnum;

  @IsOptional()
  @ApiPropertyOptional({
    type: [IpDto],
    title: "The list of IPs connected to this product. Whether they are domains or others."
  })
  ips?: IpDto[];
}
