from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from djongo import models
from octofit_tracker.models import Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        User = get_user_model()
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Team Marvel')
        dc = Team.objects.create(name='Team DC')

        # Create users
        tony = User.objects.create_user(username='ironman', email='tony@marvel.com', password='password', first_name='Tony', last_name='Stark', team=marvel)
        steve = User.objects.create_user(username='cap', email='steve@marvel.com', password='password', first_name='Steve', last_name='Rogers', team=marvel)
        bruce = User.objects.create_user(username='hulk', email='bruce@marvel.com', password='password', first_name='Bruce', last_name='Banner', team=marvel)
        clark = User.objects.create_user(username='superman', email='clark@dc.com', password='password', first_name='Clark', last_name='Kent', team=dc)
        diana = User.objects.create_user(username='wonderwoman', email='diana@dc.com', password='password', first_name='Diana', last_name='Prince', team=dc)
        barry = User.objects.create_user(username='flash', email='barry@dc.com', password='password', first_name='Barry', last_name='Allen', team=dc)

        # Create activities
        Activity.objects.create(user=tony, type='Run', duration=30, calories=300)
        Activity.objects.create(user=steve, type='Swim', duration=45, calories=400)
        Activity.objects.create(user=bruce, type='Lift', duration=60, calories=600)
        Activity.objects.create(user=clark, type='Fly', duration=50, calories=500)
        Activity.objects.create(user=diana, type='Fight', duration=40, calories=450)
        Activity.objects.create(user=barry, type='Sprint', duration=20, calories=250)

        # Create workouts
        Workout.objects.create(name='Power Circuit', description='Full body circuit', team=marvel)
        Workout.objects.create(name='Speed Run', description='Interval sprints', team=dc)

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=1200)
        Leaderboard.objects.create(team=dc, points=1100)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data.'))
