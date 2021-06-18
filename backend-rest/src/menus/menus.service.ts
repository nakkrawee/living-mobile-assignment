import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MenuModel } from './menu.model';
import { CreateMenuDto } from './dto/createMenu.dto';

@Injectable()
export class MenusService {
    constructor(
        @InjectModel(MenuModel) // inject model and use it as repository
        private menuRepo: typeof MenuModel, // UserModel act like userRepo here.
    ){}

    create(menu: CreateMenuDto) {
        // userRepo is Sequelize model it have many functions to work with database.
        // more info please see below documents.
        return this.menuRepo.create(menu);
    }

    findAll() {
        return this.menuRepo.findAll();
    }


  findOne(id: string): Promise<MenuModel> {
    return this.menuRepo.findOne({ where: { id: id } });
    }

    async remove(id: string): Promise<void> {
        await this.menuRepo.destroy({
            where:{id:id}
        });
    }

  async update(id: string, menu: CreateMenuDto) {
    await this.menuRepo.update(menu, { where: { id: id } });
    }

}
