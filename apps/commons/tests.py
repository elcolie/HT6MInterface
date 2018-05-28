from django.contrib.auth.models import User
from django.test import TestCase
from model_mommy import mommy
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APIClient


class TestFBV(TestCase):
    def setUp(self):
        sarit = mommy.make(User, username='elcolie', first_name='Sarit', last_name='Ritwirune')
        self.client = APIClient()
        self.client.force_authenticate(user=sarit)

    def test_get_username(self):
        url = reverse('get-username')
        res = self.client.get(url)
        msg = {
            'username': "elcolie",
        }
        assert status.HTTP_200_OK == res.status_code
        assert msg == res.data
