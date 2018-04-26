# Use an official Python runtime as a parent image
FROM continuumio/anaconda
# Set the working directory to /app
WORKDIR /backend
RUN apt-get update && apt-get install -y build-essential cmake

# Copy the current directory contents into the container at /app
ADD . /backend

# Install any needed packages specified in requirements.txt
RUN pip install  -r requirements.txt
RUN conda install opencv



# lib for tesseract
RUN apt-get update && apt-get install -y g++ autoconf automake libtool \
    autoconf-archive zlib1g-dev libicu-dev libpango1.0-dev libcairo2-dev

# tesseract 4
RUN apt-get update && apt-get install -y libleptonica-dev \
    tesseract-ocr

RUN mkdir /images

# RUN apt-get install -y python-dev
# RUN apt-get install -y python-pip
# RUN apt-get install -y python-openssl
# RUN apt-get install -y python-mysqldb
# RUN apt-get install -y libmysqlclient-dev
# RUN apt-get install -y python-mysql.connector
RUN conda install mysql-python
RUN pip install mysql-connector
RUN apt-get install -y mysql-client
# Define environment variable

# RUN add-apt-repository ppa:alex-p/tesseract-ocr && apt-get update


# Make port 8090 available to the world outside this container
EXPOSE 8090
ENV PYTHONPATH /backend

# Run merged_api.py when the container launches
CMD ["python", "/backend/endpoints/merged_api.py"]
