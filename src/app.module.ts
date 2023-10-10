import { cwd } from 'node:process';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    ProdutosModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(cwd(), 'src/graphql.ts'),
        outputAs: 'interface',
      },
    }),
  ],
})
export class AppModule {}
