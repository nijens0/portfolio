import {Controller, Get, Query} from "@nestjs/common";
import {GitHubApiService} from "./git-hub-api.service";
import {ContributionHistoryQueryDto} from "./dto/ContributionHistoryQueryDto";

@Controller('git-hub-api')
export class GitHubApiController {

    constructor(private readonly gitHubApiService: GitHubApiService) {
    }

    @Get('contribution-calendar')
    getContributionCalendar() {
        return this.gitHubApiService.getContributionCalendar();
    }

    @Get('contribution-history')
    getContributionHistory(@Query('from') dto: ContributionHistoryQueryDto) {
        return this.gitHubApiService.getContributionHistory(dto);
    }
}