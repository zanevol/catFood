const { src, dest, watch, series } = require('gulp'),
	browserSync = require('browser-sync').create(),
	rename = require('gulp-rename'),
	cleancss = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minify = require('gulp-minify'),
	htmlmin = require('gulp-htmlmin'),
	imageResize = require('gulp-image-resize'),
	imagemin = require('gulp-imagemin'),
	del = require('del');

const bs = () => {
	serveSass();
	browserSync.init({
		server: {
			baseDir: "./"
		},
		notify: false,
	});
	watch("./*.html").on('change', browserSync.reload);
	watch("./*.css").on('change', browserSync.reload);
	watch('./sass/**/*.sass', serveSass);
	watch('./sass/**/*.scss', serveSass);
	watch('./script/*.js').on('change', browserSync.reload);

};

const serveSass = () => {
	return src('./sass/**/*.sass', './sass/**/*.scss')
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(dest('./css'))
		.pipe(browserSync.stream());
};

const buildCSS = (done) => {
	src('css/**/**.css')
		.pipe(cleancss({ compatibility: 'ie8' }))
		.pipe(dest('dist/css/'));
	done();
};

const buildJS = (done) => {
	src(['script/**.js', '!script/**.min.js'])
		.pipe(minify({
			ext: {
				min: '.js'
			}
		}))
		.pipe(dest('dist/script/'));
	src('script/**.min.js')
		.pipe(dest('dist/script/'))
	done();
};

const html = (done) => {
	src('**.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest('dist'));
	done();
};

const php = (done) => {
	src('**.php')
		.pipe(dest('dist'));
	src('phpmailer/**/**')
		.pipe(dest('dist/phpmailer'));
	done();
};

const fonts = (done) => {
	src('fonts/**/**')
		.pipe(dest('dist/fonts'));
	done();
};


const img2x = (done) => {
	src(['img/**/**', '!img/**/**.svg'])
		.pipe(imageResize({ width: '100%' }))
		.pipe(imagemin())
		.pipe(dest('dist/img/@2x/'))
	src('img/**/*.svg')
	.pipe(dest('dist/img/'))
	done();
};

// const delet = (done) => {

// 	del(['dist/img/@2x'], { force: true })
// 	done();
// }

exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, php, fonts, img2x);