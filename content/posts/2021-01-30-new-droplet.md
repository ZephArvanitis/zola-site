+++
title = "Setting up a fresh droplet"
[taxonomies]
tags = ["web-dev", "sysadmin"]
+++
Here was an hour of fun! It felt time to migrate to a new server, to ring
in the new (static) site and make sure I fully understand the
configuration. Why do this?

<!-- more -->

  * My other server has been up in some form since 2014 or so, and
      I...didn't know much about system administration back then. So who
      knows what havoc past-Zeph may have wreaked?
  * Now that I have a static site, the required configuration is much more
      straightforward! No php or mysql or wsgi.
  * Why not?

So, a bit of setup. I had an html directory ready to go that I'd tested
locally with zola. All I needed was a place to put it and the configuration
necessary to view those files via a website.

1. Create a  new 'Basic' droplet at digitalocean.com (use an ssh key
   configuration rather than setting a root password – much better
   security.)
2. Change DNS A records with my hosting provider to point to this new ip
   address (specifically `@` and `*`, I still have `apps.wxyzeph.com`
   running on django on my old memory-crunched server.)
3. ssh in with the ssh key you specified in setting up the server. (I spent
   a bit of time adjusting `~/.ssh/config` to make my life easier)
4. Set up root account
    - clone dotfiles and move them into place (follow instructions at
        https://github.com/ZephArvanitis/dotfiles, note you cannot use the
        git@github.com route to clone because you don't have a github ssh key
        set up ... yet)
    - get vim set up (with my current vimrc, just open vim and let the
        package manager do its thing, which should take less than 2 min)
    - install zsh (`apt-get install zsh`, then edit `/etc/passwd` to point to
        zsh instead of bash, which circumvents `chsh` requiring a password,
        which is less secure than my ssh-key-only setup.)
    - spend an inordinate amount of time changing the hostname from
        gobbledygook to wxyzeph, which entailed editing `/etc/hosts` and
        `/etc/hostname`, then likely a restart, since `service restart hostname`
        is saying there's no such service.
5. Run `apt-get update`, then `apt-get upgrade` to bring things up to date.
6. Install apache, I guess?
    - `apt-get install apache2`
    - Disable the default-000 site, rename it as whatever you like, and
    - re-enable it, then edit
        to your heart's content. In my case, I needed to create a
        `/var/www/wxyzeph/html` (and logs) directory, set DocumentRoot to
        there, and edit the Error/AccessLog destinations. (Note: should
        also set ServerName, or you may get an error `AH00558: apache2:
        Could not reliably determine the server's fully qualified domain
        name, using 10.10.0.5. Set the 'ServerName' directive globally to
        suppress this message` – [Digital
        Ocean](https://www.digitalocean.com/community/tutorials/apache-configuration-error-ah00558-could-not-reliably-determine-the-server-s-fully-qualified-domain-name#setting-a-global-servername-directive)
        suggests adding `ServerName: 127.0.0.1` to
        `/etc/apache2/apache2.conf`) Copy existing
        `var/www/html/index.html` into your html directory.
    - Set good permissions in `/var/www`. Based on [this askubuntu
        answer](https://askubuntu.com/questions/386928/default-permissions-for-var-www)
        it seems the best plan is for `/var/www` to be `root:root` and for
        stuff within it to be owned by the user who will edit it, and
        `www-data` should only have any ownership over files it *must* be
        able to write to.
    - Once this is done, go to the website – you should see the Apache2
        ubuntu default page.
7. Create a new user `zeph` and set up their ssh access. The rest of this
   work should probably be done by non-root.
    - `adduser zeph` (make sure to save their password somewhere!)
    - use `ssh-keygen` to generate a keypair to use for this new user
    - manually add the correct public key to `/home/zeph/.ssh/authorized_keys`
        (and ensure that file is owned by zeph rather than root!)
    - try it out! `ssh zeph@wxyzeph.com -i /path/to/private/key`
8. Copy files over! (at some point I need to learn rsync)
    - (with rsync: `rsync -avz public/ wxyzeph:/var/www/wxyzeph/html`)
9. Get ssl/https set up
    - install certbot `apt-get install certbot`
    - add mod ssl `apt-get install python3-certbot-apache`
    - run certbot on apache `certbot --apache`
10. ...profit?



