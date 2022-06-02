import {Ctx, Query, Resolver} from 'type-graphql';
import {getConnection} from 'typeorm';
import {ItotalServicesUsed, MyContext} from '../@types/types';

@Resolver()
export class AnalyticsResolver {
  @Query(() => [ItotalServicesUsed], {nullable: true})
  // @UseMiddleware(protect)
  async analyticsTotalServicesUsed(
    @Ctx() {req}: MyContext
  ): Promise<ItotalServicesUsed[]> {
    const result = await getConnection().query(
      `select 
            service as key, count(*)
            from post where "creatorId" = 1 
            GROUP BY service;
        `
    );
    return result;
  }

  @Query(() => [ItotalServicesUsed], {nullable: true})
  // @UseMiddleware(protect)
  async analyticsTotalLanguagesUsed(
    @Ctx() {req}: MyContext
  ): Promise<ItotalServicesUsed[]> {
    const result = await getConnection().query(
      `select 
            language as key, count(*)
            from post where "creatorId" = 1 
            GROUP BY language;
        `
    );
    return result;
  }

  @Query(() => [ItotalServicesUsed], {nullable: true})
  // @UseMiddleware(protect)
  async analyticsTotalGenderUsed(
    @Ctx() {req}: MyContext
  ): Promise<ItotalServicesUsed[]> {
    const result = await getConnection().query(
      `select 
            gender as key, count(*)
            from post where "creatorId" = 1 
            GROUP BY gender;
        `
    );
    return result;
  }

  @Query(() => [ItotalServicesUsed], {nullable: true})
  // @UseMiddleware(protect)
  async analyticsTotalVoicesUsed(
    @Ctx() {req}: MyContext
  ): Promise<ItotalServicesUsed[]> {
    const result = await getConnection().query(
      `select 
            "voiceId" as key, count(*)
            from post where "creatorId" = 1 
            GROUP BY "voiceId";
        `
    );
    return result;
  }

  @Query(() => String, {nullable: true})
  // @UseMiddleware(protect)
  async analyticsTotalSavedVoices(
    @Ctx() {req}: MyContext
  ): Promise<ItotalServicesUsed[]> {
    const result = await getConnection().query(
      `select 
            count(*)
            from post where "creatorId" = 1 
            GROUP BY "creatorId";
        `
    );
    console.log(result);
    return result[0].count;
  }
}
