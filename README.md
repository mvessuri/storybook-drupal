# Drupal Website with DDEV

This README provides instructions on how to set up and use this Drupal website with DDEV (Docker-based development environment).

## Prerequisites

- [Docker](https://www.docker.com/get-started) or [OrbStack](https://orbstack.dev/) (recommended for Mac users)
- [DDEV](https://ddev.readthedocs.io/en/stable/)

## Getting Started

1. Clone this repository:

git clone https://github.com/mvessuri/storybook-drupal.git cd storybook-drupal

2. Start DDEV:

ddev start

3. Install Drupal dependencies:

ddev composer install

4. Install Drupal:

ddev drush site:install --account-name=admin --account-pass=admin

5. Configure Drupal UUID:

ddev drush cset system.site uuid 99dbf195-64ea-46e1-b6ad-ae4748b8e0f4

6. Import configuration:

ddev drush cim

7. Access your site:

- Web: `https://storybook-nsl-drupal.ddev.site`

## Common DDEV Commands

- `ddev start`: Start the project
- `ddev stop`: Stop the project
- `ddev restart`: Restart the project
- `ddev composer <command>`: Run Composer commands
- `ddev drush <command>`: Run Drush commands
- `ddev ssh`: SSH into the web container

## Theme Development

This project uses the Storybook NSL theme. To work on the theme:

1. Navigate to the theme directory:

cd web/themes/custom/storybook_nsl

2. Install theme dependencies:

npm install

3. Compile stories:

ddev drush storybook:generate-all-stories --uri=https://storybook-nsl-drupal.ddev.site

4. Run Storybook:

npm run storybook
