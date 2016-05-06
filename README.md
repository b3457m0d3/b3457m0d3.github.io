![Build Status](https://gitlab.com/pages/octopress/badges/master/build.svg)

---

Example [Octopress] website using GitLab Pages.

Learn more about GitLab Pages at https://pages.gitlab.io and the official
documentation http://doc.gitlab.com/ee/pages/README.html.

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [GitLab CI](#gitlab-ci)
- [Building locally](#building-locally)
- [GitLab User or Group Pages](#gitlab-user-or-group-pages)
- [Did you fork this project?](#did-you-fork-this-project)
- [Troubleshooting](#troubleshooting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## GitLab CI

This project's static Pages are built by [GitLab CI][ci], following the steps
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml):

```
image: ruby:2.3

pages:
  script:
  - bundle install -j4
  - bundle exec rake generate
  - mv public .public
  - mv .public/octopress public
  artifacts:
    paths:
    - public
  only:
  - master
```

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project
1. [Install][] Octopress and its dependencies: `bundle install`
1. Generate the website: `rake generate`
1. Preview your project: `rake preview`
1. Visit <http://localhost:4000/octopress>
1. Add content

Read more at the Octopress [documentation][].

## GitLab User or Group Pages

To use this project as your user/group website, you will need one additional
step: just rename your project to `namespace.gitlab.io`, where `namespace` is
your `username` or `groupname`. This can be done by navigating to your
project's **Settings**.

Read more about [user/group Pages][userpages] and [project Pages][projpages].

Finally, Octopress needs to be configured to be deployed in the root directory.
In short:

1. Run locally: `rake set_root_dir[/]`
1. Edit `_config.yml` and change the `url`
1. Edit `gitlab-ci.yml` to look like:

    ```
    image: ruby:2.3

    pages:
      script:
      - bundle install -j4
      - bundle exec rake generate
      artifacts:
        paths:
        - public
      only:
      - master
    ```

1. Commit and push your changes

When you hack locally, remember that the preview location will be at
<http://localhost:4000>.

Follow <http://octopress.org/docs/deploying/subdir/> for more details.

## Did you fork this project?

If you forked this project for your own use, please go to your project's
**Settings** and remove the forking relationship, which won't be necessary
unless you want to contribute back to the upstream project.

## Troubleshooting

1. CSS is missing! That means two things:

    Either that you have wrongly set up the CSS URL in your templates, or
    your static generator has a configuration option that needs to be explicitly
    set in order to serve static assets under a relative URL.

[ci]: https://about.gitlab.com/gitlab-ci/
[octopress]: http://octopress.org
[install]: http://octopress.org/docs/setup/
[documentation]: http://octopress.org/docs/
[userpages]: http://doc.gitlab.com/ee/pages/README.html#user-or-group-pages
[projpages]: http://doc.gitlab.com/ee/pages/README.html#project-pages
