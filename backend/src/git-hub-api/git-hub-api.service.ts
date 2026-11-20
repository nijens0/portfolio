import {Inject, Injectable} from "@nestjs/common";
import {providersTokens} from "../constants";
import {graphql} from "@octokit/graphql"
import {ContributionHistoryQueryDto} from "./dto/ContributionHistoryQueryDto";

@Injectable()
export class GitHubApiService {

    constructor(@Inject(providersTokens.OCTOKIT) private readonly octokit: typeof graphql) {
    }

    getContributionCalendar() {
        return this.octokit(`
            {
                user(login: "nijens0") {
                    contributionsCollection {
                        contributionCalendar {
                            totalContributions
                            weeks {
                                contributionDays {
                                    date
                                    contributionCount
                                    contributionLevel
                                }
                            }
                        }
                    }
                }
            }
            `)
    }

    getContributionHistory(dto: ContributionHistoryQueryDto) {

        const from = new Date(dto.from).toISOString();
        const to = new Date(dto.to).toISOString();

        const CONTRIBUTION_HISTORY_QUERY = `query ($from: DateTime, $to: DateTime) {
            user(login: "nijens0") {
                contributionsCollection(from: $from, to: $to) {
                    commitContributionsByRepository {
                        contributions {
                            totalCount
                        }
                        repository {
                            nameWithOwner
                        }
                    }
                    totalCommitContributions
                    totalRepositoriesWithContributedCommits
                    pullRequestContributionsByRepository {
                        contributions {
                            totalCount
                        }
                        repository {
                            nameWithOwner
                        }
                    }
                    repositoryContributions {
                        totalCount
                        nodes {
                            repository {
                                nameWithOwner
                                primaryLanguage {
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }`;

        return this.octokit(CONTRIBUTION_HISTORY_QUERY, {from, to})
    }
}