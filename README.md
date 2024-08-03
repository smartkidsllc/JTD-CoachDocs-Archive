# SmartKids Docs

The repo holds the source code for the SmartKids Docs. If you want to contribute to the docs, then you’re in the right place. If you just want to read the docs, then go to <https://docs.smartkidsllc.com>.

## Building and previewing the site locally

Assuming [Jekyll] and [Bundler] are installed on your computer:

1.  Change your working directory to the root directory of your site.

2.  Run `bundle install`.

3.  Run `bundle exec jekyll serve` to build your site and preview it at `localhost:4000`.

    The built site is stored in the directory `_site`.

## Contributing

If you want to contribute to this repo, then please take a look at [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Licensing and Attribution

This repository is licensed under the [MIT License]. You are generally free to reuse or extend upon this code as you see fit; just include the original copy of the license.

The deployment GitHub Actions workflow is heavily based on GitHub's mixed-party [starter workflows]. Here’s a copy of [their MIT License]:

> MIT License
> 
> Copyright (c) 2020 GitHub
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE. THIS LICENSE DOES NOT GRANT YOU RIGHTS TO USE ANY CONTRIBUTORS'
> NAME, LOGO, OR TRADEMARKS.

[Jekyll]: https://jekyllrb.com
[Bundler]: https://bundler.io
[MIT License]: https://en.wikipedia.org/wiki/MIT_License
[starter workflows]: https://github.com/actions/starter-workflows/blob/main/pages/jekyll.yml
[their MIT License]: https://github.com/actions/starter-workflows/blob/main/LICENSE
