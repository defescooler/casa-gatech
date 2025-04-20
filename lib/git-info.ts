import { execSync } from 'child_process';

export function getLastCommitDate(): string {
    try {
        // Get the date of the last commit
        const dateStr = execSync('git log -1 --format=%cd').toString().trim();
        const date = new Date(dateStr);

        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (error) {
        console.error('Failed to get git commit date:', error);
        return '';
    }
}