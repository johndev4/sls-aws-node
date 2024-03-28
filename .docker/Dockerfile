FROM amazonlinux:2 AS core
RUN set -ex \
    yum update -y \
    && yum install unzip -y \
    && curl -sL https://rpm.nodesource.com/setup_16.x | bash - \
    && yum install nodejs -y && npm i -g serverless \
    && amazon-linux-extras install python3 \
    && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip && ./aws/install -i /usr/local/aws-cli -b /usr/local/bin \
    && npm config set registry http://registry.npmjs.org/ && npm config set loglevel info \
    && npm config set fetch-retries 3 && npm config set audit false && npm config set fetch-retry-mintimeout 15000 \
    && npm config set fetch-retry-maxtimeout 90000 && npm config set progress false \
    && yum remove unzip -y && yum clean all && rm -rf /var/cache/yum awscliv2.zip aws \
    && yum install less -y
CMD ["/bin/bash"]