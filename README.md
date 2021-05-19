# zola-site
A static site, some version of which should be viewable at [wxyzeph.com](https://wxyzeph.com).

## Local development
1. Install [zola](https://getzola.org)
2. `zola serve`

## Deployment
1. `zola build`
2. `cd public`
3. `rsync -avz . user@server:/path/to/wxyzeph/html`
