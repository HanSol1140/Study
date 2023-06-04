# 랜덤과 난수 관련 모듈
import random

# 난수 생성
print(random.random()) # 0~1 float
print(random.randint(0, 255)) # 0~255, int
print(random.uniform(0, 255)) # 0~255, float

# 리스트와 랜덤
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
choice = random.choice(numbers) # 비파괴적인 처리
print(choice)

# 샘플 몇개 뽑기
sample = random.sample(numbers, 3) # 리스트 중 랜덤한 3개를 뽑는다
print(sample)

# 섞기
print('=' *20)
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
print(numbers)
random.shuffle(numbers) # 파괴적인 처리
print(numbers)
random.shuffle(numbers) # 파괴적인 처리
print(numbers)

# 파괴적인 처리?
# 자바스크립트의 push()와 concat()의 차이를 생각하면 됩니다.
# 둘다 배열에 데이터를 추가하는 메서드지만
# 실행한 순간 원본 배열을 변경해버리는 .push()와
# 실행하여도 원본 배열은 변경하지 않는 concat()의 차이