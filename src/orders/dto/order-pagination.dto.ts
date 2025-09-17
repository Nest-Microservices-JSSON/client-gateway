import { IsEnum, IsOptional } from "class-validator";
import { PaginationDto } from "src/common";
import { OrderStatus } from "../enum/order.enum";

export class OrderPaginationDto extends PaginationDto {
    @IsOptional()
    @IsEnum(OrderStatus, { message: `Status must be one of the following values: ${Object.values(OrderStatus).join(', ')}` })
    status: OrderStatus
}