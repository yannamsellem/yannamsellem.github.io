import { browser } from '$app/environment';

export type Theme = 'dark' | 'light';

class ThemeState {
	current = $state<Theme>('dark');

	constructor() {
		if (browser) {
			const saved = localStorage.getItem('theme') as Theme | null;
			if (saved === 'dark' || saved === 'light') {
				this.current = saved;
			} else {
				// Default to dark mode
				this.current = 'dark';
			}
			this.apply();
		}
	}

	toggle = () => {
		this.current = this.current === 'dark' ? 'light' : 'dark';
		if (browser) {
			localStorage.setItem('theme', this.current);
			this.apply();
		}
	};

	private apply() {
		if (!browser) return;
		if (this.current === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
}

export const theme = new ThemeState();
