import { Module } from '@nestjs/common';
import {PrismaModule} from "./prisma/prisma.module";
import {AdminModule} from "./admin/admin.module";
import {DeveloperModule} from "./developers/developer.module";
import {ProjectModule} from "./project/project.module";
import {ProjectMediaModule} from "./project-media/project-media.module";
import {StackModule} from "./stack/stack.module";
import {ConfigModule} from "@nestjs/config";
import {GitHubApiModule} from "./git-hub-api/git-hub-api.module";


@Module({
  imports: [
      PrismaModule, AdminModule, DeveloperModule,
      ProjectModule, ProjectMediaModule, StackModule,
      GitHubApiModule,
      ConfigModule.forRoot({ isGlobal: true })
  ],
})
export class AppModule {}
