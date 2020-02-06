
FROM node:12.11.1

# Update install os dep
RUN apt-get update && apt-get install -y apt-utils cron

WORKDIR /scraper

COPY . .

RUN yarn install

# Add crontab file in the cron directory
ADD crontab /etc/cron.d/hello-cron

# Give execution rights on the cron job
RUN chmod 0644 /etc/cron.d/hello-cron

# Give execution rights on the run.sh file
RUN chmod 0777 /scraper/run.sh

# Create the log file to be able to run tail
RUN touch /var/log/cron.log

# Run the command on container startup
# TODO make this a .sh file
CMD cron && tail -f /var/log/cron.log
#CMD ["cron", "-f"]