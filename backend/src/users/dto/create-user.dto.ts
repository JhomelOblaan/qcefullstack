import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    firstname: string;
    @ApiProperty()
    lastname:string;
    @ApiProperty()
    username:string;
    @ApiProperty()
    email:string;
    @ApiProperty()
    password:string;
    @ApiProperty()
    picture: string;
}
