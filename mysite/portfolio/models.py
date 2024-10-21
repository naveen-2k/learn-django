from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    message = models.TextField()

    def __str__(self):
        return self.name


class SelfInfo(models.Model):
    name = models.CharField(max_length=255)
    bio = models.TextField()
    skills = models.TextField()  # Can store a comma-separated list of skills
    languages = models.TextField()  # Can store a comma-separated list of languages
    certifications = models.TextField()  # Can store a comma-separated list of certifications

    def __str__(self):
        return self.name
