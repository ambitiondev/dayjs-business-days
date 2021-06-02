module.exports = {
    git: {
        requireCleanWorkingDir: false,
        commitMessage: 'release: ${version}',
        requireBranch: "main",
        requireUpstream: false
    },
    github: {
        release: true,
    },
    plugins: {
        '@release-it/conventional-changelog': {
            infile: 'CHANGELOG.md',
            preset: {
                name: 'conventionalcommits',
                types: [
                    {
                        type: 'feature',
                        section: 'Features'
                    },
                    {
                        type: 'fix',
                        section: 'Bugfixes'
                    },
                    {
                        type: 'chore',
                        section: 'Chores / Other'
                    }
                ]
            }
        }
    }
};
