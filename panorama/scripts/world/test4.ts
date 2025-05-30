/**
 * Example of typescript usage on panorama world panels.
 * This example showcases how to use a movie panel on a world panel.
 * NOTE: World audio is global, changing this probably requires
 * a fair amount of refactor work.
 */
'use strict';

class Test4 {
    static panels = {
        movie: $<Movie>('#test4-movie')
    }

	static volume: float = 0;
	static movie: string = 'file://{media}/attract01.webm';

    static Init() {
		this.panels.movie = $<Movie>('#test4-movie');

		this.panels.movie?.SetMovie(this.movie);
		this.panels.movie?.SetPlaybackVolume(this.volume);
    }

	static Play() {
		if (this.panels.movie) {
			this.panels.movie.Play();
		}
	}

	static Pause() {
		if (this.panels.movie) {
			this.panels.movie.Pause();
		}
	}

	static Restart() {
		if (this.panels.movie) {
			this.panels.movie.Stop();
			this.panels.movie.Play();
		}
	}

	static IncrementVolume(increment: float) {
		if (this.panels.movie) {
			this.volume += increment;
			this.panels.movie.SetPlaybackVolume(this.volume);
		}
	}
}